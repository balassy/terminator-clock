#include "PlayStateService.h"

PlayStateService::PlayStateService(AsyncWebServer* server, SecurityManager* securityManager) :
  _httpEndpoint(PlayState::read,
                PlayState::update,
                this,
                server,
                PLAY_SERVICE_PATH,
                securityManager,
                AuthenticationPredicates::IS_ADMIN)
{
  addUpdateHandler([&](const String& originId){ onStateUpdated(); }, false);
}

void PlayStateService::begin() {
  _state.fileId = 0;
}

void PlayStateService::onStateUpdated() {
  Serial.print("PlayStateService::onStateUpdated:");
  Serial.println(_state.fileId);
}
