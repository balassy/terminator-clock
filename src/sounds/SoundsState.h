#ifndef SoundsState_h
#define SoundsState_h

#include <StatefulService.h>

class SoundsState {
  public:
    unsigned int bootFileId;
    static void read(SoundsState& settings, JsonObject& root);
    static StateUpdateResult update(JsonObject& root, SoundsState& state);
};

#endif /* SoundsState_h */
