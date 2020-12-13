#ifndef PlayStateService_h
#define PlayStateService_h

#include <HttpEndpoint.h>
#include <StatefulService.h>

#include "PlayState.h"

#define PLAY_SERVICE_PATH "/rest/play"

class PlayStateService : public StatefulService<PlayState> {
  public:
    PlayStateService(AsyncWebServer* server, SecurityManager* securityManager);
    void begin();

  private:
    HttpEndpoint<PlayState> _httpEndpoint;
    void onStateUpdated();
};

#endif /* PlayStateService_h */
