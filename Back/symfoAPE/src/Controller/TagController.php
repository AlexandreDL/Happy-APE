<?php

namespace App\Controller;

use App\Entity\Tag;
use App\Repository\TagRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManagerInterface;

//use Symfony\Component\HttpFoundation\Request;

class TagController extends AbstractController
{
    /**
     * @Route("/tags", name="tag_list", methods = {"GET"})
     */
    public function list(TagRepository $tagRepository)
    {
        $tags = $tagRepository->findAll(); 
 
        $formatted = [];
        foreach ($tags as $tag) {
            $formatted[] = [
               'id' => $tag->getId(),
               'name' => $tag->getTitle(),
            ];
        } 
        return new JsonResponse($formatted);
    }
    

    /**
     * @Route("/tag/{id}", name="tag_show", methods={"GET"}))
     */
    public function show(Tag $tag)
    { 
      if (empty($tag)) {
        return new JsonResponse(['message' => 'Tag not found'], Response::HTTP_NOT_FOUND);
      }


        $formatted[] = [
        'id' => $tag->getId(),
        'name' => $tag->getTitle(),
        ];
        return new JsonResponse($formatted);
    }

    /**
     * Creates a new Tag entity.
     *
     * @Route("/api/tag/create", methods={"POST"}, name="tag_create")
     */
    public function create(Request $request, EntityManagerInterface $entityManager) {
       $newTag = json_decode($request->getContent(), true);  

        $tag = new Tag();
        $tag->setTitle($newTag->title);

        $entityManager->persist($tag);
        $entityManager->flush();
        
        $data = [
            'status' => 201,
            'message' => 'Le tag à été créé'
        ];
        return new JsonResponse($data, 201);  
    }
    
    /**
     * @Route("/api/tag/{id}/edit", name="tag_edit", methods = {"PUT"})
     */
    public function edit(Tag $tag, Request $request, EntityManagerInterface $entityManager) 
    {
        // $this->denyAccessUnlessGranted
        $tag = json_decode($request->getContent());
        if ($tag === null) {
            return new JsonResponse(['message' =>'Ce tag n\'existe pas.'], Response::HTTP_NOT_FOUND);
        }
        
        $entityManager->flush();

        $response = new JsonResponse($tag, 200);
        return $response;
    }


    /**
     * @Route("/api/tag/{id}/delete", name="tag_delete")
     */
    public function delete($id) {

        $tag = $this->getDoctrine()->getRepository(Tag::class)->find($id);
        
        if ($tag) {
          $entityManager = $this->getDoctrine()->getManager();
          $entityManager->remove($tag);
          $entityManager->flush();
        }
         return new Response(null, 204);  
      }
}


