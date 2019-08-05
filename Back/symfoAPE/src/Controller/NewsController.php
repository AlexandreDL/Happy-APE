<?php

namespace App\Controller;

use App\Entity\News;
use App\Entity\Medium;
use App\Repository\NewsRepository;
use App\Utils\Slugger;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class NewsController extends AbstractController
{
    // /**
    //  * @Route("/news", name="news_list", methods = {"GET"})
    //  */
    // public function list(NewsRepository $newsRepository)
    // {
    //    $news = $newsRepository->findNext3(); 
    //    return $this->json($news);
    // }

    // /**
    //  * @Route("/news/{id}", name="news_show", methods={"GET"}))
    //  */
    // public function show(News $news)
    // {   
    //     if (empty($news)) {
    //         return new JsonResponse(['message' => 'News not found'], Response::HTTP_NOT_FOUND);
    //       }
    
    //     return $this->json($news);
    // }

    // /**
    //  * @Route("/api/news/create", name="news_create")
    //  */
    // public function create(Request $request, EntityManagerInterface $entityManager, Slugger $slugger) {
    //     $newNews = json_decode($request->getContent(), true);  
 
    //     $news = new News();
    //     $news->setTitle($newNews->title);
    //     $news->setContent($newNews->content);
        
    //     $slug = $slugger->slugify($news->getTitle());
    //     $news->setSlug($slug);

    //     $entityManager->persist($news);
    //     $entityManager->flush();
        
    //     $data = [
    //         'status' => 201,
    //         'message' => 'Le news à été créé'
    //     ];
    //     return new JsonResponse($data, 201);  
    // }

    // /**
    //  * @Route("/api/news/{id}/edit", name="news_edit")
    //  */
    // public function edit(News $news, Request $request, Slugger $slugger,  EntityManagerInterface $entityManager) 
    // {
    //     // $this->denyAccessUnlessGranted
    //     $news = json_decode($request->getContent());
    //     if ($news === null) {
    //         return new JsonResponse(['message' =>'Cette news n\'existe pas.'], Response::HTTP_NOT_FOUND);
    //     }

    //     $slug = $slugger->slugify($news->getTitle());
    //     $news->setSlug($slug);

    //     $entityManager->flush();
        
    //     $response = new JsonResponse($news, 200);
    //     return $response;
    // }

    // /**
    //  * @Route("/api/news/{id}/delete", name="news_delete")
    //  */
    // public function delete($id) {

    //     $news = $this->getDoctrine()->getRepository(News::class)->find($id);
        
    //         if ($news) {
    //             $entityManager = $this->getDoctrine()->getManager();
    //             $entityManager->remove($news);
    //             $entityManager->flush();
    //         }
    //   return new Response(null, 204);
    // }
}