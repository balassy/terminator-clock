#include "PlayState.h"

void PlayState::read(PlayState& settings, JsonObject& root) {
  root["fileId"] = settings.fileId;
}

StateUpdateResult PlayState::update(JsonObject& root, PlayState& state) {
  state.fileId = root["fileId"];
  return StateUpdateResult::CHANGED;
}
