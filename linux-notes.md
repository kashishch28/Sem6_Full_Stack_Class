# 🐧 Linux / Unix Fundamentals

## 📌 Overview
These notes cover core Linux and Unix fundamentals including philosophy, filesystem, terminal usage, essential commands, and basic Git usage from the terminal.

---

## 1. Unix Philosophy
Unix follows a simple and powerful design philosophy:
- Programs should do **one thing well**
- Programs should work together
- Use **text** as a universal interface

---

## 2. Kernel vs Shell

### Kernel
- Core of the operating system
- Manages hardware, CPU, memory, and processes

### Shell
- Interface between user and kernel
- Executes user commands
- Examples: bash, sh, zsh

---

## 3. CLI vs GUI

| CLI | GUI |
|----|----|
| Text-based | Graphical |
| Faster | Slower |
| Scriptable | Mouse-based |

---

## 4. Linux Filesystem Hierarchy

```
/
├── bin     # Essential binaries
├── home    # User directories
├── etc     # Configuration files
├── var     # Logs and variable data
├── usr     # User applications
└── tmp     # Temporary files
```

Everything in Linux is treated as a file.

---

## 5. Terminal Usage Basics
- Commands are case-sensitive
- Uses `/` for directory paths
- `~` represents home directory

---

## 6. Unix File System Concepts

### Absolute vs Relative Paths

**Absolute Path**
```bash
/home/user/docs
```

**Relative Path**
```bash
docs/file.txt
```

### Hidden Files
Files starting with `.`
```bash
ls -a
```

### Inode Concept
- Stores file metadata
- Each file has a unique inode number
```bash
ls -i
```

---

## 7. Basic Unix Commands

```bash
pwd     # Show current directory
ls      # List files
cd      # Change directory
mkdir   # Create directory
rmdir   # Remove empty directory
rm      # Remove file
touch   # Create empty file
cat     # Display file content
less    # View file page by page
man     # Manual/help
```

---

## 8. Advanced Unix Commands

### grep
```bash
grep "error" file.txt
```

### find
```bash
find . -name "*.md"
```

### Permissions
```bash
chmod 755 script.sh
chown user:group file.txt
```

### Pipes and Redirection
```bash
ls | grep md
echo "hello" > file.txt
cat file.txt >> file2.txt
```

### Background Jobs
```bash
command &
jobs
```

---

## 9. Git Usage from Linux Terminal
### Making a New Branch and Switching to It

```bash
$ pwd
/c/Users/kashi

$ mkdir B
$ cd B

$ git init
Initialized empty Git repository

$ touch readme.md
$ code .

$ git add readme.md
$ git commit -m "Initial commit"

$ git checkout -b f_b
Switched to a new branch 'f_b'

$ git branch
* f_b
  master
```

---

## ✅ Summary
- Linux & Unix fundamentals
- Filesystem and terminal usage
- Essential and advanced commands
- Git branch creation via terminal
