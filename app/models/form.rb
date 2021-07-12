class Form < ApplicationRecord
    validates :formTitle, presence: true
    validates :img, presence: true
    validates :description, presence: true
    validates :email, presence: true
    validates :jobTitle, presence: true
    validates :bestTime, presence: true
    validates :propertyType, presence: true
end
