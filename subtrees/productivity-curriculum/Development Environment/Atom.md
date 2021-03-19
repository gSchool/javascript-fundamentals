[Atom](https://atom.io/) is a hackable text editor for the 21st century.

### Install Atom

To get started, [download Atom](https://atom.io/download/mac), unzip the archive file, and drag the app icon into your `/Applications` folder.

Once installed, use Spotlight to launch Atom by pressing the `Command` + `Spacebar` keys at the same time, typing the word "atom" into the search field, and then pressing the `Enter` key.

![](https://i.imgur.com/fuVq4T5.jpg)

You can close all the open tabs by typing `Command` + `W`.

### Configure Atom

Next, navigate to the `Atom > Preferences` menu item by pressing the `Command` + `,` keys at the same time.

Under the **Settings** tab, in the **Editor Settings** section, change the following:

| Name                               | Value   |
|------------------------------------|---------|
| Font Family                        | Menlo   |
| Font Size                          | 18      |
| Show Indent Guide                  | ✅      |
| Soft Wrap                          | ✅      |
| Soft Wrap At Preferred Line Length | ✅      |

Under the **Packages** tab, search for the core package called **autosave**. Then, click the **Settings** button and change the following:

| Name    | Value   |
|---------|---------|
| Enabled | ✅      |

Under the **Install** tab, with the **Package** button highlighted, install the following:

| Name                           | Type    |
|--------------------------------|---------|
| file-icons                     | Package |
| language-fish-shell            | Package |

Under the **Install** tab, with the **Themes** button highlighted, install the following:

| Name                           | Type         |
|--------------------------------|--------------|
| tomorrow-night-eighties-syntax | Syntax Theme |

Under the **Themes** tab, choose the following:

| Name                    | Type         |
|-------------------------|--------------|
| Tomorrow Night Eighties | Syntax Theme |

When you're done, close the preferences tab by pressing the `Command` + `W` keys at the same time.

### Install the Shell Commands

You'll find it insanely useful to open files and directories into Atom from the Terminal.

To get started, select the `Atom > Install Shell Commands` menu item.

To verify Atom is wired up correctly, run the following command.

```
atom ~/Downloads
```

And the contents of your `Downloads` directory will be displayed in Atom's left sidebar.
