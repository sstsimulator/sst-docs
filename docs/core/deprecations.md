---
title: Deprecation history
---

See the below table for information on deprecations in current and past SSTCore releases. 

| Item                                    | Deprecated | Removed       | Suggested alternative | Note  |
| ---                                     | ---           | ---               | ---                   | -----  |
| `Event::Handler<Class>`                 | 14.0          |               | `Event::Handler2<Class, Func>` | The new type `Handler2` will eventually be renamed back to `Handler` once all handlers switch to the new format. This switch facilitates checkpointing support. |
| `Clock::Handler<Class>`                 | 14.0          |               | `Clock::Handler2<Class, Func>` | The new type `Handler2` will eventually be renamed back to `Handler` once all handlers switch to the new format. This switch facilitates checkpointing support. |
| `Simulation::getSimulation()`           | 13.0          | 14.0          | Use direct APIs to access simulation state which are available through element and other base classes |  |
| `BaseComponent::getSimulation()`        | 13.0          | 14.0          | Use direct APIs to access simulation state which are available through element and other base classes |  |
| `Link::sendInitData()`                  | 13.0          | 14.0          | `Link::sendUntimedData()`           |  |
| `Link::recvInitData()`                  | 13.0          | 14.0          | `Link::recvUntimedData()`           |  |
| `SimpleNetwork::sendInitData()`         | 13.0          | 14.0          | `SimpleNetwork::sendUntimedData()`  |  |
| `SimpleNetwork::recvInitData()`         | 13.0          | 14.0          | `SimpleNetwork::recvUntimedData()`  |  |
| `SST_ELI_REGISTER_SUBCOMPONENT_DERIVED` | 13.0          | 14.0          | `SST_ELI_REGISTER_SUBCOMPONENT`    |  |
| `SST_ELI_REGISTER_MODULE_DERIVED`       | 13.0          | 14.0          | `SST_ELI_REGISTER_MODULE`           |  |
| `SST::Interfaces::SimpleMem`            | 12.0          | 14.0          | `SST::Interfaces::StandardMem`      |  |

