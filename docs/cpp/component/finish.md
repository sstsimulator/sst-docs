---
id: finish
title: finish()
---
## Fully Qualified Name
```cpp
SST::BaseComponent::finish()
```

### Remarks
Called after simulation completes, but before objects are destroyed.

Perform any tasks that need to be done at the end of a simulation, such as:
- finalize statistics
- Many components don't do anything at all.

## Requirements

```cpp
 #include <sst/core/component.h>
```

## Syntax

```cpp
SST::BaseComponent::finish()
```

## Parameters

**None**


## Return Value

**None**

## Examples

### Example 1
```cpp
// Generally printing is not a good idea from the finish function,
// but it is an example of what you could do at the end of a simulation.
void carWash::finish() {
	CAR_RECORD *ptr = ptrCarRecordList;
	int SmallCarCustomers = 0;
	int LargeCarCustomers = 0;
	
	std::cout << std::endl;
	std::cout << "------------------------------------------------------------------" << std::endl;
	std::cout << "Uncle Ed's Carwash Simulation has completed!" << std::endl;
	std::cout << "Here's a summary of the results:" << std::endl;
	std::cout << "Simulation duration was: " << runTime << " hours of operation." << std::endl;
	std::cout << "Small Cars Washed: " << CarWash.smallCarsWashed << std::endl;
	std::cout << "Large Cars Washed: " << CarWash.largeCarsWashed << std::endl;
	std::cout << "Total Cars washed: " << (CarWash.smallCarsWashed + CarWash.largeCarsWashed) << std::endl;
	
	while(1) {
		if(NULL != ptr) {
			if(SMALL_CAR == ptr->CarSize)
				SmallCarCustomers++;
			else if(LARGE_CAR == ptr->CarSize)
				LargeCarCustomers++;
			ptr = ptr->ptrNext;
		}
		else {
			std::cout << std::endl;
			break;
		}
	}

	std::cout << "Customers that are still waiting in line" << std::endl;
	std::cout << "Small Cars: " << SmallCarCustomers << std::endl;
	std::cout << "Large Cars: " << LargeCarCustomers << std::endl;
	std::cout << "Total: " << SmallCarCustomers + LargeCarCustomers << std::endl;
	std::cout << "------------------------------------------------------------------" << std::endl;
}
```

## See Also

- [setup](cpp/component/setup.md)