import os
import sys
del sys.argv[0]
os.system("git pull")
os.system("git add -A")
os.system(f"""git commit -m "{' '.join(sys.argv)}" -- .""")
os.system("git push")
