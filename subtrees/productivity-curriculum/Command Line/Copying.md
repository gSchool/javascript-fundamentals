# Copying Files and Folders

To copy files, we use the `cp` command.  For files, it's a simple:

```
$ cp file1.txt file2.txt
```

`file1.txt` is the _source_. `file2.txt` is the _destintation_.

If we want to copy folders, we need to pass the recursive flag `-r`, or we will see errors:

```
$ cp foldername foldername2
```

## Exercise

- Create a file in a folder
- Copy that file into the same folder
- Create a new folder
- Copy a file into the new folder
- Copy the folder and all files in it to a new location
