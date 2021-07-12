class UsersController < ApplicationController

    def index
        @users = User.all
        
    end

    def show
        @user = User.find(params[:id])
    end

    def new
        @user = User.new
    end

    def create
        @user = User.create(user_params)
        if @user.save
            flash[:success] = "User Successfully saved"
        else
            flash[:error] = "User was not saved"
        end
    end

    def edit
        @user = User.find(params[:id])
    end

    def update
        @user = User.update(user_params)
        if @user.save
            flash[:success] = "User Successfully saved"
        else
            flash[:error] = "User was not saved"
            render :edit
        end
    end

    def destroy
        User.find(params[:id]).destroy
    end

    private
        def user_params
            params.require(:user).permit(:email, :password)
        end
end
