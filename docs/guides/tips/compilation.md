---
title: Compilation tips
---

## Avoid unnecessary recompilation
To avoid a majority of redundant recompilation when developing SST Core and Elements, you can have the `install` utility preserve timestamps of installed files. To do this, override the `INSTALL` variable when configuring SST, prior to running `make`. This will allow `make` and friends to continue to work properly while reducing the amount of recompilation. Appending the `INSTALL` flag to your configure script invocation will set it appropriately. 

```sh
$ ../configure --prefix=$HOME/install <other configure flags> INSTALL="/usr/bin/install -p"
```

You may need to adjust the path to reflect the location of your `install` binary.
Once this is done, you should no longer need to perform unnecessary recompilations.
Please note that you must adjust your configuration for Core, Elements, and any other SST libraries.

## Ignore particular SST Elements 
To avoid compiling SST Elements that are not of interest, put a `.ignore` file in the element directory and run `./autogen.sh` followed by configure and make. Note that this may cause some tests to fail if one element has a testing dependency on another that is not built. Additionally, placing a .unignore file in the same directory will override a .ignore file.

For example, to ignore the Ariel library:
```sh
$ cd sst-elements
$ touch src/sst/elements/ariel/.ignore
$ ./autogen.sh
$ ./configure <configure flags>
$ make all install
```


