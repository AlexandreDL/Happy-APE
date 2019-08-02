<?php

namespace App\Controller;

use App\Entity\PrivatePost;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PrivatePostRepository;
use Symfony\Component\HttpFoundation\Request;
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
     */
    public function create(Request $request, EntityManagerInterface $entityManager) {
      $newprivatePost = json_decode($request->getContent(), true);  

      $privatePost = new PrivatePost();
      $privatePost->setTitle($newprivatePost->title);
      $privatePost->setContent($newprivatePost->content);

      $entityManager->persist($privatePost);
      $entityManager->flush();
      
      $data = [
          'status' => 201,
          'message' => 'Le bidule à été créé'
      ];
      return new JsonResponse($data, 201);  
  }


    /**
     * @Route("/api/privatePost/{id}/edit", name="privatePost_edit")
     */
    public function edit(PrivatePost $privatePost, Request $request) 
    {
        // $this->denyAccessUnlessGranted
        $privatePost = json_decode($request->getContent());
        if ($privatePost === null) {
            return new JsonResponse(['message' =>'Ce post n\'existe pas.'], Response::HTTP_NOT_FOUND);
        }

        $response = new JsonResponse($privatePost, 200);
        return $response;
    }



    /**
     * @Route("/api/privatePost/{id}/delete", name="privatePost_delete")
     */
    public function delete($id) {

        $privatePost = $this->getDoctrine()->getRepository(PrivatePost::class)->find($id);
      
      if ($privatePost) {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($privatePost);
        $entityManager->flush();
      }
      return new Response(null, 204);
      }
}