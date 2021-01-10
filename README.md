# Terminator Clock

An ESP8266-controlled NTP-based alarm clock that looks like a T-800 with a React configuration UI.

> I decided to stop working on this project, so don't expect any update here. In its current state this is more like a proof of concept together with my [Arduino MP3 Alarm Clock](https://github.com/balassy/arduino-mp3-alarm-clock) project.

![](./doc/login-screen.png)

## Hardware

Parts:
- 1× Wemos D1 Mini
- 2× SG90 servo motor
- 1× 5mm red LED
- 1× 100Ω resistor

Wiring:
1. Connect the LED to 3.3V and GND.
2. Connect the vertical servo to 5V, GND and D3.
3. Connect the horizontal servo to 5V, GNd and D0.

## Software

This project relies on [Platform IO](https://platformio.org/) so first you have to install that.

The web interface is built with [esp8266-react](https://github.com/rjwats/esp8266-react) the README of that project contains a lot of details about how this project is structured.

The Git history of this repository shows how I rebranded it to T-800 style.

## 3D Printed Parts

You can find the 3D printable STL files in the `_3D-Print` folder.

I designed the model with Fusion 360 and also shared the source files in case you want to further enhance them.

The eyeball, iris and pupil is based on [Metalnat's Terminator Eye model](https://www.thingiverse.com/thing:984200) on Thingiverse.
