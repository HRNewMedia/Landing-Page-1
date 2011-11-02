class Email
  include Mongoid::Document
  include Mongoid::Timestamps

  field :salutation
  field :title
  field :name
  field :company
  field :position
  field :phone
  field :email
  field :notes

  validates_presence_of :name, :company, :email
  validates_format_of :email, with: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i
end
