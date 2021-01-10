#include <ESP8266React.h>
#include <LightMqttSettingsService.h>
#include <LightStateService.h>

#include "sounds/SoundsStateService.h"
#include "play/PlayStateService.h"

#include "speed-servo.h"

#define SERIAL_BAUD_RATE 115200

AsyncWebServer server(80);
ESP8266React esp8266React(&server);
LightMqttSettingsService lightMqttSettingsService =
    LightMqttSettingsService(&server, esp8266React.getFS(), esp8266React.getSecurityManager());
LightStateService lightStateService = LightStateService(&server,
                                                        esp8266React.getSecurityManager(),
                                                        esp8266React.getMqttClient(),
                                                        &lightMqttSettingsService);

SoundsStateService soundsStateService = SoundsStateService(&server,
                                                           esp8266React.getSecurityManager(),
                                                           esp8266React.getFS());

PlayStateService playStateService = PlayStateService(&server, esp8266React.getSecurityManager());

SpeedServo verticalServo;
SpeedServo horizontalServo;

void setupServos() {
  verticalServo.attach(D3);
  verticalServo.moveSlowTo(0);
  verticalServo.moveSlowTo(30);
  verticalServo.moveSlowTo(15);
  verticalServo.moveSlowTo(30);
  verticalServo.moveSlowTo(0);
  verticalServo.moveSlowTo(15);

  horizontalServo.attach(D0);
  horizontalServo.moveSlowTo(0);
  horizontalServo.moveSlowTo(30);
  horizontalServo.moveSlowTo(15);
  horizontalServo.moveSlowTo(30);
  horizontalServo.moveSlowTo(0);
  horizontalServo.moveSlowTo(15);
}

void setup() {
  // start serial and filesystem
  Serial.begin(SERIAL_BAUD_RATE);
  Serial.println("Main setup started...");

  // start the framework and demo project
  esp8266React.begin();

  // load the initial light settings
  lightStateService.begin();

  soundsStateService.begin();
  playStateService.begin();

  // start the light service
  lightMqttSettingsService.begin();

  // start the server
  server.begin();

  setupServos();

  Serial.println("Main setup completed.");
}

void loop() {
  // run the framework's loop function
  esp8266React.loop();
}



