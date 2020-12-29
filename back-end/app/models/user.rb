class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: { case_sensitive: false }
    validates :password, presence: true

    has_many :friendships
    has_many :friends, through: :friendships
end
