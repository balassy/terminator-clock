#include "config.h"
#include "SoundsStateService.h"

#define STATE_STORAGE_PATH "/config/soundsState.json"

SoundsStateService::SoundsStateService(AsyncWebServer* server, SecurityManager* securityManager, FS* fs) :
  _httpEndpoint(SoundsState::read,
                SoundsState::update,
                this,
                server,
                SOUNDS_ENDPOINT_PATH,
                securityManager,
                AuthenticationPredicates::IS_AUTHENTICATED),
  _fsPersistence(SoundsState::read,
                 SoundsState::update,
                 this,
                 fs,
                 STATE_STORAGE_PATH)
{
  addUpdateHandler([&](const String& originId) { onConfigUpdated(); }, false);
}


void SoundsStateService::begin() {
  _state.bootFileId = DEFAULT_BOOT_FILE_ID;

  _fsPersistence.readFromFS();

  onConfigUpdated();
}


void SoundsStateService::onConfigUpdated() {
  Serial.print("onConfigUpdated:");
  Serial.println(_state.bootFileId);
}
