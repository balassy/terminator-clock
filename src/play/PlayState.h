#ifndef PlayState_h
#define PlayState_h

#include <StatefulService.h>

class PlayState {
  public:
    unsigned int fileId;
    static void read(PlayState& settings, JsonObject& root);
    static StateUpdateResult update(JsonObject& root, PlayState& state);
};

#endif /* PlayState_h */
