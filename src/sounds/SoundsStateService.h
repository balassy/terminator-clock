#ifndef SoundsStateService_h
#define SoundsStateService_h

#include <HttpEndpoint.h>
#include <FSPersistence.h>
#include <StatefulService.h>

#include "SoundsState.h"

#define SOUNDS_ENDPOINT_PATH "/rest/sounds"

class SoundsStateService : public StatefulService<SoundsState> {
  public:
    SoundsStateService(AsyncWebServer* server, SecurityManager* securityManager, FS* fs);
    void begin();

  private:
    HttpEndpoint<SoundsState> _httpEndpoint;
    FSPersistence<SoundsState> _fsPersistence;
    void onConfigUpdated();
};

#endif /* SoundsStateService_h */
