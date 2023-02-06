---
title: Time in SST
---
<!---
SAND202X-XXXX X
Source: location of source document if any
--->
Time in SST is represented by a combination of two values: a *time base* and a *count*. The time
base represents a quantum of time and is encapsulated in the `TimeConverter` object. The count
is the number of these quanta stored as an unsigned 64-bit integer (typedef'd as `SimTime t`). For
example, if the time base is 2ps and the count is 1000, the represented time is 2ns (2ps * 1000).
This tuple is for both absolute and relative time. Absolute time is the current simulated time,
whereas relative time represents delays, usually based on the current absolute time. There are also
two views of time, core and local.

## Core Time
Core time is the time as viewed by the core and absolute core time that has passed since the beginning
of the simulation. We simply refer to absolute core time as current time. The core time base is
the minimum time interval that is representable in the simulator and defaults to 1ps. It is stored as
a UnitAlgebra object in the core and can be retrieved in Components and SubComponents through
the call [`getCoreTimeBase()`](../../core/component/time/getCoreTimeBase). The current time is tracked 
with a `SimTime_t` in the core and can be found through the call 
[`getCurrentSimCycle()`](../../core/component/time/getCurrentSimCycle).
Each Simulation object (which manages all the elements of the simluation for a given partition)
keeps track of its own current time. SST uses a conservative lookahead mechanism to synchronize
across Simulation objects to ensure that events never occur out of order, even when crossing partitions.
The current time is determined by the delivery time of the activity at
the head of the core event queue (called the `TimeVortex`) that is currently being delivered/executed.

## Local Time
Local time is an element’s local view of time. The concept of local time allows an element (Component
or SubComponent) to be written without having to specifically know what absolute timescales
it is operating at. This allows a component to deal, for example, with clock cycles instead of absolute
time. A component need not care what the actual clock frequency is, just that things occur in
a certain number of clock cycles. The mechanisms used for local time ensure that the timings
relative to all other components are consistent.

The local time base is captured using a TimeConverter object. The TimeConverter stores a factor
that represents the number of core time base intervals in the time base represented by the Time-
Converter. For example, a TimeConverter that represents 1ns would have a factor of 1000 if the
core time base was 1ps (1ns / 1ps). The TimeConverter object has two main functions: 
[`convertTooreTime`](../../core/timeconverter/convertToCoreTime) and 
[`convertFromCoreTime`](../../core/timeconverter/convertFromCoreTime). You can also query the 
TimeConverter’s factor using [`getFactor()`](../../core/timeconverter/getFactor).

## The TimeConverter Object
The [TimeConverter](../../core/timeconverter/class) object is used to manage the conversion of time 
between global time and the various local views of time. 

The [`convertToCoreTime()`](../../core/timeconverter/convertToCoreTime) function converts the 
count from the local view of time to the count in the global view. For
example, if the local count is 250 and the local timebase is 1ns, the function would return 250,000
if the core time base was 1 ps (250ns * 1000 = 250,000ps). This function is used in Links when
adding extra latency (specified in the local view of time) on an event send.

Similarly, the [`convertFromCoreTime`](../../core/timeconverter/convertFromCoreTime) function 
converts a count from the global view of time to a count in the local view. This
function are used when getting the elapsed simulation time in the local view. For example, if a
Component has a clock frequency of 2GHz, the local time base would be 500ps (period of a 2GHz
clock). If [`getCurrentSimTime()`](../../core/component/time/getCurrentSimTime) 
was called after 2ms of simulation, the call would return 4,000 (2ms / 500ps).


## Default Time Bases
Components, SubComponents and Links have the concept of a default time base. This is the
local view of time used by the various member functions when a specific TimeConverter object is
not supplied. There are various ways to set the default time base. The most direct is to simply
call setDefaultTimeBase() on the object. There are also other implicit ways that the default time
base can be set, though a call to setDefaultTimeBase will always override the implicit methods.
A call to [`registerClock()`](../../core/component/time/registerClock) will, by default, set the 
(Sub)Component’s default time base to be the clock period of the requested clock. It will also set the 
default time bases of all the Links in the (Sub)Component to be the same (both links that have already 
been configured and those that haven’t). In the case where a default time base has already been explicitly 
or implicitly set, the time base will not be changed to be the clock period. In general, implicitly setting 
a default will not overwrite an existing default (implicitly or explicitly set) and explicitly setting a 
default will unconditionally overwrite any existing default.