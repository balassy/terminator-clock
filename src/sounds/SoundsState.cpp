#include "config.h"
#include "SoundsState.h"

void SoundsState::read(SoundsState& settings, JsonObject& root) {
  root["bootFileId"] = settings.bootFileId;
}

StateUpdateResult SoundsState::update(JsonObject& root, SoundsState& state) {
  unsigned int newBootFileId = root["bootFileId"] | DEFAULT_BOOT_FILE_ID;

  if (state.bootFileId != newBootFileId) {
    state.bootFileId = newBootFileId;
    return StateUpdateResult::CHANGED;
  }

  return StateUpdateResult::UNCHANGED;
}

