class ApplicationController < ActionController::API

    before_action :authorized
    skip_before_action :authorized, only: [:login]

    def current_user
        auth_header = request.headers["Authorization"]
        if auth_header
            token = auth_header.split(" ")[1]
            begin
                @user_id = JWT.decode(token, Rails.application.secret_key_base)[0]["user_id"]
                # byebug
            rescue JWT::DecodeError
                nil
            end
        end
        @user = User.find(@user_id)
    end
    
    def logged_in?
        !!current_user
    end 
    
    def authorized
        render json: {message: "Please login"}, status: :unauthorized unless logged_in?
    end
    
    def login
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            @token = JWT.encode({ user_id: @user.id }, Rails.application.secret_key_base)
            # render json: {user: @user, friends: @user.friends, token: @token}, status: :accepted
            render json: {user: @user, friendships: @user.friendships, token: @token}, status: :accepted
        else
            render json: {errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end

end
