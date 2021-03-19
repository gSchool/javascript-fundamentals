## File system paths

In any computer system, a **path** represents a location in the file system. Similar to a URL, a path is a location to files or folders on your computer. An example path is:

```
/Users/galvanize/Projects/week01
```

- [Absolute Paths](#absolute-paths)
- [Relative Paths](#relative-paths)
- [Home Directory Paths](#home-directory-paths)
- [Exercise](#exercise)

---

## Absolute Paths

A path is **absolute** when it starts with `/`. An absolute path starts from the root of the hard drive.

**An absolute path to your user folder**

```
/Users/username
```

**An absolute path to your bin folder**

```
/usr/bin
```


## Relative Paths

A path is **relative** when it does not start with `/`. Examples of relative paths are as follows:

**Start with current folder, then look for `Projects` folder, then `week01` folder**

```
./Projects/week01
```

**Same idea, but start with current path**

```
Projects/week01
```

> Pro-tip: When trying to run files from the command line with relative paths, use the `./Folder/file.sh` way otherwise we will start by looking globally for a `Folder` command


## Home Directory Paths

On Macs we have a "home" directory for our computer user. This is stored at `/Users/username`. As a nice shortcut, we can use the tilde `~` character as a shorthand reference to our user directory. For example:

```
~/Documents
```

Is equivalent to writing:

```
/Users/galvanize/Documents
```

This is handy when we want to quickly get back to our user directory, or need to reference a path from our user directory.


## Exercise

- Is the path returned by the `pwd` command absolute or relative?
- If we wanted to access our Desktop using the home directory shortcut from the command line, what path would we use?
