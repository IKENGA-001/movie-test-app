# using git and github

### Create a remote repository
go to github.com and create a repository


### Using git version control

1. Initialize a local repo 
```sh
git init
```

2. add your remote repo link as origin
```sh
git remote add origin <your_remote_repo_link>
```

3. Create a branch (master/main) is commonly used
```sh
git branch -M <branch_name>
```

4. select a branch (master/main) is commonly used
```sh
git checkout <branch_name>
```

- the above should only be done once in a project
- the following should be done each time the repo is updated (push to github)

5. add all files to push
```sh
git add .
```

6. commit all files. use meaningful commit messages to help collaborators follow up 
```sh
git commit -m "my_commit_message"
```

7. push the changes to github
```sh
git push origin <branch_name>
```