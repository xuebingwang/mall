<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <heshudong@ibenchu.com>
 * @copyright (c) 2017, notadd.com
 * @datetime 2017-05-08 15:35
 */
namespace Notadd\Mall\Handlers\Admin\Order\Rate;

use Notadd\Foundation\Passport\Abstracts\Handler;
use Notadd\Mall\Models\OrderRate;

/**
 * Class ListHandler.
 */
class ListHandler extends Handler
{
    /**
     * Execute Handler.
     *
     * @throws \Exception
     */
    protected function execute()
    {
        $builder = OrderRate::query();
        $this->withCode(200)->withData($builder->get())->withMessage('');
    }
}
