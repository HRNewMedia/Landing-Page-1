class PagesController < ApplicationController

  expose(:email)

  def danke
    render layout: false
  end

  def fehler
    render layout: false
  end

  def beispielrechnung
    render layout: false
  end
end
