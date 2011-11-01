class PagesController < ApplicationController

  def danke
    render layout: false
  end

  def fehler
    render layout: false
  end
end
