class EmailsController < ApplicationController
  respond_to :html

  def create
    Mailer.lead_notification(params).deliver
    redirect_to root_path(sending: 'sending')
  end
end
