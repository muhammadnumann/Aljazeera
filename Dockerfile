FROM node:lts as dependencies
WORKDIR /usr/src/app
COPY /application/package.json /application/yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /usr/src/app
COPY ./application .
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
ARG VIDISPINE_URL
ARG AMPLITUDE_API_KEY
ARG EXTRACT_IMAGE_VIDEO_FUNCTION_URL
ARG MAM_ENVIRONMENT
ENV NEXT_PUBLIC_VIDISPINE_URL=$VIDISPINE_URL
ENV AMPLITUDE_API_KEY=$AMPLITUDE_API_KEY
ENV EXTRACT_IMAGE_VIDEO_FUNCTION_URL=$EXTRACT_IMAGE_VIDEO_FUNCTION_URL
ENV MAM_ENVIRONMENT=$MAM_ENVIRONMENT
RUN yarn build

FROM node:lts as runner
WORKDIR /usr/src/app
ENV NODE_ENV production
COPY --from=builder /usr/src/app/next.config.js ./
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
