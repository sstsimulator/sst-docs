---
title: Deprecation history
---

See the below table for information on deprecations in current and past SSTCore releases. 

| Item                                    | Deprecated | Removed          | Suggested alternative | Note   |
| ---                                     | ---           | ---           | ---                   | -----  |
| All BaseComponent functions that return a TimeConverter* | 15.0 | 16.0 | In SST 16.0, these functions will return a TimeConverter (no pointer). Construct a local TimeConverter from the returned TimeConverter* to avoid code breaks. | Applies to `getDefaultTimeBase`, `getTimeConverter`, `registerClock`, `registerTimeBase`, `reregisterClock`, `unregisterClock` |
| All BaseComponent functions that accept a TimeConverter* | 15.0 | 16.0 | Change the `TimeConverter*` to a `TimeConverter` | Applies to `configureLink`, `configureSelfLink`, `getCurrentSimTime`, `getNextClockCycle`, `setDefaultTimeBase`  |
| All Link functions that return a TimeConverter*          | 15.0 | 16.0 | In SST 16.0, these functions will return a TimeConverter (no pointer). Construct a local TimeConverter from the returned TimeConverter* to avoid code breaks. | Applies to `getDefaultTimeBase` |
| All Link functions that accept a TimeConverter*          | 15.0 | 16.0 | Change the `TimeConverter*` to a `TimeConverter` | Applies to `addRecvLatency`, `addSendLatency`, `setDefaultTimeBase`, `send` |
| `Event::Handler<Class>`                 | 14.0          | 16.0          | `Event::Handler2<Class, Func>` | The new type `Handler2` will be renamed to 'Handler' in SST 16.0. |
| `Clock::Handler<Class>`                 | 14.0          | 16.0          | `Clock::Handler2<Class, Func>` | The new type `Handler2` will be renamed to 'Handler' in SST 16.0. |
| `Simulation::getSimulation()`           | 13.0          | 14.0          | Use direct APIs to access simulation state which are available through element and other base classes |  |
| `BaseComponent::getSimulation()`        | 13.0          | 14.0          | Use direct APIs to access simulation state which are available through element and other base classes |  |
| `Link::sendInitData()`                  | 13.0          | 14.0          | `Link::sendUntimedData()`           |  |
| `Link::recvInitData()`                  | 13.0          | 14.0          | `Link::recvUntimedData()`           |  |
| `SimpleNetwork::sendInitData()`         | 13.0          | 14.0          | `SimpleNetwork::sendUntimedData()`  |  |
| `SimpleNetwork::recvInitData()`         | 13.0          | 14.0          | `SimpleNetwork::recvUntimedData()`  |  |
| `SST_ELI_REGISTER_SUBCOMPONENT_DERIVED` | 13.0          | 14.0          | `SST_ELI_REGISTER_SUBCOMPONENT`     |  |
| `SST_ELI_REGISTER_MODULE_DERIVED`       | 13.0          | 14.0          | `SST_ELI_REGISTER_MODULE`           |  |
| `SST::Interfaces::SimpleMem`            | 12.0          | 14.0          | `SST::Interfaces::StandardMem`      |  |

