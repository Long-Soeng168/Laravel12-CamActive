<?php

namespace App\Http\Controllers\FrontPageController;

use App\Http\Controllers\Controller;
use App\Models\Heading;
use App\Models\Page;
use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CamActiveController extends Controller
{
    public function index()
    {
        $hero = Page::where('code', 'HOME')
            ->with('images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();

        $products = Page::where('code', 'PRODUCTS')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $whyWorkWithUs = Page::where('code', 'WHY-WORK-WITH-US')
            ->with('images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $whoWeWorkWith = Page::where('code', 'WHO-WE-WORK-WITH')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();

        // return $products;

        return Inertia::render('cam-active-two/Index', [
            'hero' => $hero,
            'products' => $products,
            'whyWorkWithUs' => $whyWorkWithUs,
            'whoWeWorkWith' => $whoWeWorkWith,
        ]);
    }
    public function products()
    {
        $products = Page::where('code', 'PRODUCTS')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $heading1 = Heading::where('code', 'TAILORED-SOLUTIONS')
            ->where('status', 'active')
            ->first();
        // return $products;

        return Inertia::render('cam-active-two/products/Index', [
            'products' => $products,
            'heading1' => $heading1,
        ]);
    }
    public function products_show(Page $product)
    {
        $relate_items = Page::where('parent_id', $product->parent_id)
            ->with('images')
            ->where('status', 'active')
            ->where('id', '!=', $product->id)
            ->orderBy('order_index')
            ->get();

        // return $relate_items;

        return Inertia::render('cam-active-two/products/Show', [
            'relate_items' => $relate_items,
            'item_show' => $product->load('parent'),
        ]);
    }
    public function impact()
    {
        $impact = Page::where('code', 'IMPACT')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $byNumbers = Page::where('code', 'BY-THE-NUMBERS')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $storiesFromTheField = Page::where('code', 'STORIES-FROM-THE-FIELD')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $voicesImpact = Page::where('code', 'VOICES-OF-IMPACT')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        // return $impact;

        $heading1 = Heading::where('code', 'WHATS-NEXT')
            ->where('status', 'active')
            ->first();

        return Inertia::render('cam-active-two/impacts/Index', [
            'impact' => $impact,
            'byNumbers' => $byNumbers,
            'storiesFromTheField' => $storiesFromTheField,
            'voicesImpact' => $voicesImpact,
            'heading1' => $heading1,
        ]);
    }

    public function impact_show(Page $impact)
    {
        $relate_items = Page::where('parent_id', $impact->parent_id)
            ->with('images')
            ->where('status', 'active')
            ->where('id', '!=', $impact->id)
            ->orderBy('order_index')
            ->get();

        // return $relate_items;

        return Inertia::render('cam-active-two/impacts/Show', [
            'relate_items' => $relate_items,
            'item_show' => $impact->load('parent'),
        ]);
    }
    public function why_partner_with_us_show(Page $page)
    {
        $relate_items = Page::where('parent_id', $page->parent_id)
            ->with('images')
            ->where('status', 'active')
            ->where('id', '!=', $page->id)
            ->orderBy('order_index')
            ->get();

        // return $relate_items;

        return Inertia::render('cam-active-two/WhyPartnerWithUsShow', [
            'relate_items' => $relate_items,
            'item_show' => $page->load('parent'),
        ]);
    }

    public function careers()
    {
        $career = Page::where('code', 'CAREERS')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $whyWorkWithUs = Page::where('code', 'WHY-WORK-WITH-US?')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();

        $heading1 = Heading::where('code', 'INTERNSHIPS-&-VOLUNTEERING')
            ->where('status', 'active')
            ->first();

        return Inertia::render('cam-active-two/Careers', [
            'career' => $career,
            'whyWorkWithUs' => $whyWorkWithUs,
            'heading1' => $heading1,
        ]);
    }
    public function resources()
    {
        $heading1 = Heading::where('code', 'CONTRIBUTE-OR-COLLABORATE')
            ->where('status', 'active')
            ->first();

        return Inertia::render('cam-active-two/resources/Index', [
            'heading1' => $heading1,
        ]);
    }
    public function about()
    {
        $about = Page::where('code', 'ABOUT-US')
            ->with('images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $ourMission = Page::where('code', 'OUR-MISSION')
            ->with('images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $ourVision = Page::where('code', 'OUR-VISION')
            ->with('images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $ourApproach = Page::where('code', 'OUR-APPROACH')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $ourStory = Page::where('code', 'OUR-STORY')
            ->with('images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();

        $teams = Team::where('status', 'active')
            ->orderBy('order_index')
            ->get();

        // return $team;

        return Inertia::render('cam-active-two/About', [
            'about' => $about,
            'ourMission' => $ourMission,
            'ourVision' => $ourVision,
            'ourApproach' => $ourApproach,
            'ourStory' => $ourStory,
            'teams' => $teams,
        ]);
    }
    public function contact()
    {
        $contact = Page::where('code', 'CONTACT-US')
            ->with(['images', 'children' => function ($subq) {
                $subq->with('images')->orderBy('order_index');
            }])
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();

        return Inertia::render('cam-active-two/Contact', [
            'contact' => $contact,
        ]);
    }
}
