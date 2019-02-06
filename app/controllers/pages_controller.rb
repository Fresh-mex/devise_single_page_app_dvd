class PagesController < ApplicationController
  before_action :authenticate_user!, only: :protected
  # before_action :authenticate_user!, defualt: :unprotected
  def unprotected
  end

  def protected
  end
end
