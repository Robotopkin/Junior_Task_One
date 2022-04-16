FROM node

WORKDIR /Junior_Task_3.1

COPY . /Junior_Task_3.1

RUN npm install

EXPOSE 3000

CMD ["node", "Junior_Task_1.js"]