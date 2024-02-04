from dataclasses import dataclass


@dataclass
class User:
    username: str
    email: str
    password_hash: str

    def is_valid(self) -> bool:
        return (self.username is not None and
                self.email is not None and
                self.password_hash is not None)

    def is_equal(self, username: str, password_hash: str) -> bool:
        return self.username == username and self.password_hash == password_hash


class Users:
    users: dict[str, User]

    def __init__(self):
        self.users = {}

    def add(self, user: User):
        if user.username in self.users:
            raise KeyError('username is already in the list')
        self.users[user.username] = user

    def get(self, username: str) -> User:
        return self.users[username]

    def contains(self, user: User) -> bool:
        try:
            self.get(user.username).is_equal(user.username, user.password_hash)
            return True
        except AttributeError:
            return False
