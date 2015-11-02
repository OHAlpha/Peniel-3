class AccountController < ApplicationController
  def index
    @title = @title + ' - Account'
  end

  def register
    @title = @title + ' - Register'
  end

  def login
    @title = @title + ' - Login'
  end

  def logout
    @title = @title + ' - Logout'
  end

  def leave
    @title = @title + ' - Leave'
  end

  def settings
    @title = @title + ' - Account Settings'
  end
end
