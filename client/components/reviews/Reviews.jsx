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
  queryKey: ["reviewss"],
  queryFn: () =>
    newRequest.get(`/reviews/${gigId}`).then((res) => {
      return res.data;
    }),
});

  return (
    <div className="reviews">
      {
        isLoading?"loading":error?"Something wents wrong":
        data.map((review)=><Review key={review._id} review={review}/>)
      }
    </div>
  )
}

export default Reviews