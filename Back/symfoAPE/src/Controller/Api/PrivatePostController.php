<?php

namespace App\Controller\Api;

use App\Entity\PrivatePost;
use App\Repository\PrivatePostRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
        if (empty($privatePost)) {
            return new JsonResponse(['message' => 'PrivatePost not found'], Response::HTTP_NOT_FOUND);
          }
    
        return $this->json($privatePost);
    }
}
