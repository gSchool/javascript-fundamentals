[Homebrew](http://brew.sh/) is the de facto package manager for macOS. If you've never heard of a package manager, think of it as an app store for **free** command line programs.

### Install Homebrew

To get started, run the following command in your shell. It'll download and run a script file that downloads and installs Homebrew onto your development environment. So meta! 🤘

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Be sure to agree when asked to install the **Xcode CommandLine Tools**. It may take about 10 minutes to download and install.

**TIP:** If needed, you can agree to the Xcode license by running the `sudo xcodebuild -license` command. This will require your account password which **will not** appear on the screen as you type.

### Update Homebrew

If you've previously installed Homebrew, now's a good time to update it by running the following command.

```
brew update
```

If it's been a while since the last update, you'll see something like this.

![](https://i.imgur.com/OCAX71o.png)

Otherwise, you'll see something like this.

![](https://i.imgur.com/JPB9Gnn.png)

**TIP:** Run this command periodically as Homebrew doesn't automatically update itself. 😓

### Verify Homebrew

To verify Homebrew is installed correctly, run the following command.

```
brew doctor
```

And you'll see something like this.

![](https://i.imgur.com/DWfdE3D.png)
