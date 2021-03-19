# Listing Files and Folders

### The `ls` command

One of the most frequently used commands is the `ls` command which lists the contents of the current working directory.

```
ls
```

![](https://i.imgur.com/tivSrqi.png)

### Exercise

In what order are the files and directories displayed?

### Command flags

**Command flags** are a common way to specify options for command line programs. If a command allows a command flag to be specified, it typically is a single dash `-` or double dash `--` immediately followed by a letter, number, symbol, or word. Some commands even accept multiple command flags to be specified at the same time. You'll see some examples of this shortly.

### Long format

Like many shell commands, the behavior of `ls` can be modified. By default, it displays the files and directories in your current working directory in alphabetical order spread over multiple columns. However, you can modify that behavior by providing one or more command flags.

The `l` flag changes the behavior of `ls` to display the items in a long format. So in addition to the file and directory names, it'll display permission, ownership, size, and the last modification time of each item in the directory.

```
ls -l
```

![](https://i.imgur.com/TzK8I2m.png)

### Exercise

How can you tell if an item is a file or directory?

**Hint:** Look at the first letter of each row.

### Human-friendly sizes

When using the `-l` flag with the `ls` command, the size of each item is displayed in bytes. To display sizes in a more human-friendly manner, you can use the `-h` flag and it'll add one of the following suffixes.

| Suffix | Meaning  |
|--------|----------|
| `B`    | byte     |
| `K`    | kilobyte |
| `M`    | megabyte |
| `G`    | gigabyte |
| `T`    | terabyte |
| `P`    | petabyte |

```
ls -hl
```

![](https://i.imgur.com/oUiKGx6.png)

### Hidden files and directories

You may not realize it, but there are **hidden files and directories** scattered throughout your computer's operating system. All it takes to hide a file or directory is to start its name with a period `.` prefix. Hidden items can be revealed by using the `-a` flag with the `ls` command.

```
ls -a
```

Many programs have configuration settings that they want stored out of plain sight from users. Traditionally, these settings are stored in hidden files and directories in your home directory. As a professional web developer, you'll want to access and modify these settings and, throughout this course, you'll be doing just that.
