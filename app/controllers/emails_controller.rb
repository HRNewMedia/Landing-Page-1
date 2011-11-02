class EmailsController < ApplicationController
  respond_to :html

  expose(:email)

  def create
    if email.save
      Mailer.lead_notification(email).deliver
      respond_with(email, location: root_path(id: email.id))
    else
      respond_with(email)
    end
  end
end
