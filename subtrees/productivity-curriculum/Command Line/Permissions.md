## File Permissions

We don't always want everyone to have the same kind of access to certain files, especially when those files are shared among multiple users. This becomes more important as we start to get into deployment; however, it's important to understand now what all those letters are when you list out your files!

### Understanding Permissions

Take the following line which you may see in a directory:

```
-rwxrw-r--  1 steverogers  staff  526 Jun 28 13:15 books.txt
```

The column on the left e.g.: `-rwxrw-r--` displays the files' permissions. That is whether or not you can read, write or execute the file. By that we mean the following:

| Permission | Purpose                                                       |
| ---------- | ------------------------------------------------------------- |
| read       | Can read the file (e.g. `cat myfile.txt`)                     |
| write      | Can write to the file (e.g. `echo "Spiderman >> movies.txt"`) |
| execute    | Run the file as a program (e.g. `./myscript.sh`)              |

The first character is one of three:

* `-` for a regular file
* `d` for a directory
* `l` for a "link" which we'll talk about more another time.

The next 9 characters are one of 4 characters, and refer to what can be done to the file. These should be thought of in groups of 3, and they describe the permissions for different people/groups of people. So for our line: `-rwxrw-r--` we have the leading `-` telling us it's a file, then 3 groups:

* `rwx` The owner's permissions are first, the owner can read write and execute
* `rw-` The group's permissions are next, they can read and write
* `r--` Everyone else's permissions are last, everyone can read this file

After that we see `1 steverogers  staff  526 Jun 28 13:15 books.txt`. This line tells that the "steverogers" user owns this file; the file belongs to the staff group; its size is 526 bytes; it was last modified Jun 28th at 13:15 and the name of the file is books.txt. The 1 at the start refers to how many files a directory contains, it is always 1 for regular files but might be larger for directories.

### Encountering Permissions

Let's start to play around with a script file to see how permissions work before we start to change them. Create a new folder called `file-permissions` in your `unit-1` folder. `cd` your way into it and then run the following:

```
touch hello-user.sh && \
echo "echo \"Hello $(whoami)\"" > hello-user.sh && \
ls -l hello-user.sh
```

**Try This**

Take a look at the output from the `ls` command and then answer the following:

* What can the individual user do?
* To run our script, we can type `./hello-user.sh`. Are you surprised out the output? Why or why not?
* Try reading the file with `cat`. Are you surprised at the output? Why or why not?

### Changing Permissions

The `chmod` command is what allows us to change the permissions on a file. The `man` page for this is a bit confusing, but essentially it works like so:

```
chmod [permission arguments] [your-file]
```

For the permission arguments, we can either provide numbers or letters. Technically, these are referred to as the `Octal Modes` and `Symbolic Modes`.

We're going to focus on the symbolic mode since that'll make a bit more sense. After typing `chmod`, we can use the '+', '-', or '=' signs to connect the class (i.e. user, group, others, all) and the available permissions (read, write, execute).

For example, try running the following:

```
chmod a=r hello-user.sh && \
ls -l hello-user.sh
```

What was the output? Notice that all groups now have read access.

**Try This**

For each bullet point, first take a guess on what you think will happen. Then run the code and confirm/deny your assumption.

* `chmod a= hello-user.sh`
* `chmod u=rw hello-user.sh`
* `chmod u+x hello-user.sh`
* `chmod u-rwx hello-user.sh`
* `chmod go=r hello-user.sh`
* `chmod u=rwx hello-user.sh`
* `chmod ugo= hello-user.sh`

Once you've run the commands, discuss with a neighbor how everything is working. As a reference, you can use the [Wikipedia Article](https://en.wikipedia.org/wiki/Chmod).

**Try This**

Change the permissions on the file so that you can execute it. To do so, you should just need to type `./hello-user.sh`.

### Changing Ownership

You won't have to do this often throughout this class, but it's important to know how to change who is the owner of a particular file. If you are **not** the explicit owner, your access permissions will vary.

Type the following into your terminal. What do you think it will do? Who is the owner of these files?

```
ls -l /
```

You should notice that the owner is `root` -- this is a special user who owns critical files on your computer. Let's change our script file so that it belongs to this user.

```
chown root hello-user.sh
```

What happened? You probably got something like:

```
chown: hello-user.sh: Operation not permitted
```

In order to run this command, we'll need to use `sudo`. Originally, sudo stood for "superuser do". It's a way to force the computer to run a command despite any permissions set on it. As you can imagine, this can be potentially very dangerous. We should always be very careful about when we're using `sudo` and not abuse its power.

Running the following command will prompt you for your password. This is the password you use when logging into your account on your computer.

```
sudo chown root hello-user.sh
```

If you list out information about the file now, you should see that the owner has changed! Depending on how you last left your file, you won't be able to run the script or perform certain commands.

Reclaim the file by simply switching the owner back.

```
sudo chown root hello-user.sh
```

## Guiding Questions

Permissions
> What someone can _do_ with a file. Permissions can be different for the individual owner, the group, or all others.

sudo
> Runs the command that follows as a superuser. Potentially dangerous!
