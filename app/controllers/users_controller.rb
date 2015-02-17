class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to root_path, notice: 'Successfully created user!'
    else
      flash.now[:alert] = 'Error creating user!'
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end

end
