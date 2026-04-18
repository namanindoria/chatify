import { Resend } from 'resend';
import { ENV } from "./env.js";
export const resendClient = new Resend('re_BrVUep2d_jm3mefag5iXdLVvmedhHw1wt');

export const sender = {
  email: ENV.EMAIL_FROM,
  name: ENV.EMAIL_FROM_NAME,
}

