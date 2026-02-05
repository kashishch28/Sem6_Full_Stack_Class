
echo "Creating directory structure..."
mkdir -p records/2026/January/week2

cd records/2026/January/week2

echo "Creating files..."
touch project.txt notes.txt

echo "Listing files with inode, permissions, and size..."
ls -li

echo "Creating hard link..."
ln project.txt project_backup.txt

echo "Deleting original file..."
rm project.txt

echo "Checking hard link existence..."
ls

echo "Displaying contents of hard link..."
cat project_backup.txt

echo "Listing inode numbers again..."
ls -li
