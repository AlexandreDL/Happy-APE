<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\PrivatePost;
use App\Repository\PrivatePostRepository;

/**
 * @Route("/api", name="api_")
 */
class PrivatePostController extends AbstractController
{
    /**
     * @Route("/privatePosts", name="privatePost_list", methods = {"GET"})
     */
    public function list(PrivatePostRepository $privatePostRepository)
    {
       $privatePosts = $privatePostRepository->findAll(); 
       return $this->json($privatePosts);
    }

    /**
     * @Route("/privatePost/{id}", name="privatePost_one", methods={"GET"}))
     */
    public function one(PrivatePost $privatePost)
    {
        return $this->json($privatePost);
    }
}
