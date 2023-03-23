import { useEffect, useState } from "react";

const useLearner = (email) => {
    const [isLearner, setIsLearner] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://p-hero-task-server.vercel.app/users/learner/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsLearner(data.isLearner)
                    setIsLoading(false)
                })
        }

    }, [email])
    return [isLearner, isLoading]
}

export default useLearner;