class Api::V1::FormsController < ApplicationController
  def index
    form = Form.all.order(created_at: :desc)
    render json: form
  end

  def create
    form = Form.create!(form_params)
    if form
      render json: form
    else
      render json: form.errors
    end
  end

  def show
    if form
      render json: form
    else
      render json: form.errors
    end
  end

  def destroy
    form&.destroy
    render json: { message: 'Form deleted!' }
  end

  private

  def form_params
    params.permit(:formTitle, :img, :description, :email, :jobTitle, :bestTime, :propertyType)
  end

  def form
    @form ||= Form.where({'formTitle' => params[:formTitle]})
  end

end
