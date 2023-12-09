import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import React, { useEffect, useState } from "react";
import newRequest from "../../utils/newRequest";
import Review from '../review/Review';
import "./Reviews.scss";
import axios from "axios";

function Reviews({gigId}) {

const queryClient = useQueryClient()

const { isLoading, isError, data, error } = useQuery({
  queryKey: ["reviews"],
  queryFn: () =>
    newRequest.get(`/reviews/${gigId}`).then((res) => {
      return res.data;
    }),
});

const mutation = useMutation({
  mutationFn: (reveiw)=>{
    return newRequest.post('/reviews', reveiw)
  },
  onSuccess: ()=>{
    queryClient.invalidateQueries(["reviews"]);
  }
})

const handleSubmit = (e)=>{
  e.preventDefault();
  const desc = e.target[0].value;
  const star = e.target[1].value;
  mutation.mutate({gigId ,desc, star});
}

  return (
    <div className="reviews">
      {
        isLoading?"loading":error?"Something wents wrong":
        data.map((review)=><Review key={review._id} review={review}/>)
      }
      <div className="add">
          <h3>Add a reveiw</h3>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='write your opinion'/>
            <select name="" id="">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <button>Send</button>
          </form>
        </div>
    </div>
  )
}

export default Reviews