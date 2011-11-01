class Email
  include Mongoid::Document
  include Mongoid::Timestamps

  field :salutation
  field :title
  field :first_name
  field :last_name
  field :position
  field :phone
  field :email
  field :notes

  validates_presence_of :first_name, :last_name, :email
  validates_format_of :email, with: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i
end
