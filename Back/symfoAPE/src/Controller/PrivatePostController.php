<?php

namespace App\Controller;

use App\Entity\PrivatePost;
use App\Repository\PrivatePostRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PrivatePostController extends AbstractController
{
    /**
     * @Route("/profil/privatePosts", name="privatePost_list", methods = {"GET"})
     */
    public function list(PrivatePostRepository $privatePostRepository)
    {
       $privatePosts = $privatePostRepository->findPrivatePosts(); 
       return $this->json($privatePosts);
    }

    /**
     * @Route("/profil/privatePost/{id}", name="privatePost_show", methods={"GET"}))
     */
    public function show(PrivatePost $privatePost)
    {   
        if (empty($privatePost)) {
            return new JsonResponse(['message' => 'PrivatePost not found'], Response::HTTP_NOT_FOUND);
          }
    
        return $this->json($privatePost);
    }

     /**
     * @Route("/api/privatePost/create", name="privatePost_create")
     * @Route("/api/privatePost/{id}/edit", name="privatePost_edit")
     */

    /**
     * @Route("/api/privatePost/{id}/delete", name="privatePost_delete")
     */
    public function delete($id) {

        $privatePost = $this->getDoctrine()->getRepository(PrivatePost::class)->find($id);
        
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($privatePost);
        $response = new Response();
        $response->send();

        return $this->json($privatePost);
      }
}
