class Api::V1::UsersController < ApplicationController
  def index
    user = User.all.order(created_at: :desc)
    render json: user
  end

  def create
    user = User.create!(user_params)
    if user
      render json: user
    else
      render json: user.errors
    end
  end

  def show
    if user
      render json: user
    else
      render json: user.errors
    end
  end

  def destroy
    user&.destroy
    render json: { message: 'User deleted!' }
  end

  def checkUser
    if check
      render json: {message: true}
    else
      render json: {message: false}
    end
  end

  private

  def user_params
    params.permit(:email, :password)
  end

  def user
    @user ||= User.find(params[:id])
  end

  def check
    user = User.where('email': params[:email], 'password': params[:password])
    if user.size > 0
      return true
    else 
      return false
    end
  end
end
